let insert = document.getElementById('insert');
let keyDiv = document.querySelector('body');

window.addEventListener('keydown', (event) => {

    insert.innerHTML =
        `
<div class="activo">
<p>event.key</p>

<div class= "key">
 ${event.key}
</div>
</div>

<div class="activo">
<p>event.keyCode</p>

<div class= "key">
${event.keyCode}
</div>
</div>

<div class="activo">
<p>event.code</p>

<div class="key"> 
${event.code}
</div>
</div>
`
})

