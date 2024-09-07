function toggleVisibility(sectionId: string): void {
    const section = document.querySelector(sectionId) as HTMLElement | null;

    if (section) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}