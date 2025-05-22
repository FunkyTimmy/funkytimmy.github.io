function hideLoading() {
            const loadingMessage = document.getElementById('loadingMessage');
            if (loadingMessage) {
                loadingMessage.style.display = 'none';
            }
        }

        function toggleFullscreen() {
            const gameFrame = document.getElementById('gameFrame');
            
            if (!document.fullscreenElement) {
                gameFrame.requestFullscreen().then(() => {
                    gameFrame.classList.add('fullscreen-active');
                }).catch(err => {
                    console.log('Error attempting to enable fullscreen:', err.message);
                });
            } else {
                exitFullscreen();
            }
        }

        function exitFullscreen() {
            if (document.fullscreenElement) {
                document.exitFullscreen().then(() => {
                    const gameFrame = document.getElementById('gameFrame');
                    gameFrame.classList.remove('fullscreen-active');
                });
            }
        }

        document.addEventListener('fullscreenchange', function() {
            const gameFrame = document.getElementById('gameFrame');
            if (!document.fullscreenElement) {
                gameFrame.classList.remove('fullscreen-active');
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && document.fullscreenElement) {
                exitFullscreen();
            }
        });

        document.getElementById('gameIframe').addEventListener('error', function() {
            const loadingMessage = document.getElementById('loadingMessage');
            loadingMessage.innerHTML = '<p>Error loading game, try reloading page. If that does not work, contact a developer</p>';
        });
