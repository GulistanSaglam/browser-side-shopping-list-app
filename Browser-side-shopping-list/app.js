
const listDiv = document.querySelector('.listdiv');
const button = document.getElementById('submit');
const input = document.getElementById('inputWord');

let calculate = 0;


 function addItem() {

    if (input != '') {
        calculate++;

        const parag = document.createElement('p');
        parag.classList.add('.parag');
        const deletebutton = document.createElement('div');
        deletebutton.classList.add('deletebutton');
        deletebutton.innerText='Delete';
        const finishbutton = document.createElement('div');
        finishbutton.classList.add('finishbutton');
        finishbutton.innerText='OK';
     
        parag.innerText = calculate + ')' + input.value;
       
        listDiv.appendChild(parag);
        parag.appendChild(deletebutton);
        parag.appendChild(finishbutton);

        input.value = '';

        deletebutton.addEventListener('click', function(){
            calculate--;
            listDiv.removeChild(parag);
        })

        finishbutton.addEventListener('click', function(){
           parag.classList.toggle('togglee');
        })
}
}

button.addEventListener('click', addItem);

input.addEventListener('keyup', function(e) {
   if(e.keyCode == 13){
    addItem();
   }
})
