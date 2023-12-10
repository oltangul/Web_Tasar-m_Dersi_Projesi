document.addEventListener('DOMContentLoaded', function () {
    // Tüm detay butonları
    var btns = document.querySelectorAll('.myBtn');

    // Tüm modallar
    var modals = document.querySelectorAll('.modal');

    // Tüm kapatma butonları
    var spans = document.querySelectorAll('.close');

    // Modal açma işlevi
    function openModal(index) {
        modals[index].style.display = "block";
    }

    // Modal kapatma işlevi
    function closeModal(index) {
        modals[index].style.display = "none";
    }

    // Tüm detay butonlarına tıklama olayı ekle
    btns.forEach(function (btn) {
        btn.onclick = function () {
            var index = btn.getAttribute('data-modal-index');
            openModal(index);
        };
    });

    // Tüm kapatma butonlarına tıklama olayı ekle
    spans.forEach(function (span) {
        span.onclick = function () {
            var index = span.getAttribute('data-modal-index');
            closeModal(index);
        };
    });

    // Ekranın dışına tıklanınca tüm modalları kapat
    window.onclick = function (event) {
        modals.forEach(function (modal, index) {
            if (event.target == modal) {
                closeModal(index);
            }
        });
    };
});
