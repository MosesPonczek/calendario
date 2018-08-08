// Modal script

function toggleModal() {
    const modalButton = document.querySelector('.js-modal-button');
    const modal = document.querySelector('.js-modal');
    const modalClose = document.querySelector('.js-modal-close');

    const bodyOverlay = document.createElement('div');
    bodyOverlay.classList.add('js-body-overlay');
    document.querySelector('body').appendChild(bodyOverlay);

    modalButton.addEventListener('click', function () {
        modal.classList.add('show-modal');
        bodyOverlay.classList.add('show-overlay');
    });
    modalClose.addEventListener('click', function () {
        modal.classList.remove('show-modal');
        bodyOverlay.classList.remove('show-overlay');
    });
    bodyOverlay.addEventListener('click', function () {
        modal.classList.remove('show-modal');
        bodyOverlay.classList.remove('show-overlay');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    toggleModal();
});