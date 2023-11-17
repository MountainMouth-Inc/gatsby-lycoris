import React from "react";

const Modal = (children) => (
  <>
    <div class="row flex-spaces child-borders">
      <label class="paper-btn margin" for="modal-2">
        {children.btn_text}
      </label>
    </div>
    <input class="modal-state" id="modal-2" type="checkbox" />
    <div class="modal">
      <label class="modal-bg" for="modal-2"></label>
      <div class="modal-body">
        <label class="btn-close" for="modal-2">
          X
        </label>
        <h4 class="modal-title">{children.title}</h4>
        <p class="modal-text">{children.text}</p>
        <a href="https://lycoris-recoil.com/story/" target="_blank">
          Link
        </a>
        <label for="modal-2" class="modal-link">
          Close
        </label>
      </div>
    </div>
  </>
);

export default Modal;
