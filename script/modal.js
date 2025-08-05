(() => {
  const refs = {
    //Додавання атрибута на кнопку відкриття меню
    openModalBtn: document.querySelector("[data-modal-open]"),
    //Додавання атрибута на кнопку закриття меню
    closeModalBtn: document.querySelector("[data-modal-close]"),
    //Додавання атрибута на бекдроп меню
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", togModal);
  refs.closeModalBtn.addEventListener("click", togModal);

  function togModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
