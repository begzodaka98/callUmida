function submit() {
    event.preventDefault();
    event.stopImmediatePropagation();
    console.log('hello')
}
document.getElementById('form').addEventListener("submit", async function(event) {
    event.preventDefault();
    event.stopPropagation()
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.organization.value);
    console.log(event.currentTarget.phone.value);
    console.log(event.currentTarget.comment.value);
    alert('✔️')
    // fetch
    location.reload()
});