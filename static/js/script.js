document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('prediction-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.querySelector('.btn-text');
    const loader = document.querySelector('.loader');
    
    // Overlay Elements
    const overlay = document.getElementById('result-overlay');
    const closeBtn = document.getElementById('close-result');
    const resultIcon = document.querySelector('.result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const scoreBar = document.getElementById('score-bar');
    const probabilityScore = document.getElementById('probability-score');

    // Close overlay
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        // Reset progress bar
        scoreBar.style.strokeDashoffset = '283';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Show loading state
        btnText.style.display = 'none';
        loader.style.display = 'block';
        submitBtn.disabled = true;

        // Gather data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.error) {
                alert('Error: ' + result.error);
                throw new Error(result.error);
            }

            showResult(result.prediction, result.probability);

        } catch (error) {
            console.error('Prediction failed:', error);
        } finally {
            // Restore button state
            btnText.style.display = 'block';
            loader.style.display = 'none';
            submitBtn.disabled = false;
        }
    });

    function showResult(prediction, probability) {
        // Reset classes
        resultIcon.className = 'result-icon pulse';
        
        if (prediction === 1) {
            // Disease
            resultIcon.classList.add('disease');
            resultTitle.textContent = 'High Risk Detected';
            resultMessage.textContent = 'Based on the provided metrics, there is a significant indication of heart disease. We recommend consulting with a cardiologist promptly.';
            scoreBar.style.stroke = 'var(--danger)';
        } else {
            // Safe
            resultIcon.classList.add('safe');
            resultTitle.textContent = 'Low Risk Detected';
            resultMessage.textContent = 'The metrics indicate a low risk of heart disease. Maintain a healthy lifestyle and continue regular check-ups.';
            scoreBar.style.stroke = 'var(--success)';
        }

        // Animate Overlay In
        overlay.classList.add('active');

        // Animate Circle Progress
        const circumference = 283; // 2 * pi * r (r=45)
        const offset = circumference - (probability / 100) * circumference;
        
        // Slight delay to allow overlay to appear
        setTimeout(() => {
            scoreBar.style.strokeDashoffset = offset;
            animateValue(probabilityScore, 0, probability, 1000);
        }, 300);
    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = (progress * (end - start) + start).toFixed(1) + '%';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});
