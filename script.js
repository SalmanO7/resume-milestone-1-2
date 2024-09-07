"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toggleVisibility(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
