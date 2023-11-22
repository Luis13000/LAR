function toggleText(id) {
 var text = document.getElementById(id);
            if (text.classList.contains('hidden')) {
                text.classList.remove('hidden');
            } else {
                text.classList.add('hidden');
            }
        }