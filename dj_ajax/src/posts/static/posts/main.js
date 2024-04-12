console.log('hello worlds')

const helloWorldBox = document.getElementById('HelloWorld')
const postsBox = document.getElementById('post-box')
const spinnerBox = document.getElementById('spinner-box')

$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function (response) {
        console.log('success', response.text)
        helloWorldBox.textContent = response.text
    },
    error: function (error) {
        console.log('error', error)
    }
})

$.ajax({
    type: 'GET',
    url: '/data/',
    success: function (response) {
        console.log(response)
        const data = response.data 
        setTimeout(()=>{
            spinnerBox.classList.add('not-visible')
            console.log(data)
            data.forEach(el => {
                postsBox.innerHTML += `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">${el.title}</h5>
                        <p class="card-text">${el.body}</p>
                    </div>

                    <div class="card-footer">
                        <a href="#" class="btn btn-primary">Details</a>
                    </div
              </div>
                `
            });
        }, 1000)
    },
    error: function (error) {
        console.log(error)
    }
})
