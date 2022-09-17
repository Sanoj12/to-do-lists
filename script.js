window.addEventListener('click',function(){
    const form=document.querySelector('#ist-form');
    const input=document.querySelector('#list-input');
    const list_el=document.querySelector('#tasks');


     form.addEventListener('submit',function(e){
        e.preventDefault();

        const task=input.value
     })

})