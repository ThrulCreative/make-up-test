const fruits = document.getElementById('fruits')
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((resp) => resp.json())
    .then(function(data) {
        let fruits = ['apple', 'orange', 'mango'];
        return fruits.map((fruits) => {
    console.log(fruits)
         
    // document.getElementsByClassName('images').innerHTML = fruits.picture.large;
                        
            const img = document.createElement('img');
            const p = document.createElement('p');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const div = document.createElement('div')

            fruits.appendChild(img);
            fruits.appendChild(div);
            div.appendChild(p)
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            

            let images = fruits.appendChild(img);
            let firstPara = div.appendChild(p);
            let secondPara = div.appendChild(p1);
            let thirdPara = div.appendChild(p2);
            let fourthPara = div.appendChild(p3);
            
        

            console.log(apple.orange.mango)
            
            images.src = user.picture.large;
            
            firstPara.innerHTML = `${Apple}`;
            secondPara.innerHTML = `${Orange}`
            thirdPara.innerHTML = `${Mango}`
            
        });
    })
            .catch((error) => console.log(error));