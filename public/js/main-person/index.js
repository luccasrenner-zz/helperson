const mainPerson = (
    function(){

        const axios = require("../vendor/axios/axios").default;
        const userAPI = require("../constants/userAPI");

        const {
            newUserQuery
          } = userAPI;

        const submitButton = document.querySelector('#postDescripcionProblemaUsuario');
        
          
        submitButton.addEventListener('click', function() {
            const text = document.querySelector('#descripcionProblemaUsuario').value

            axios({
                method: "post",
                url: newUserQuery,
                headers: {},
                data: {
                  text: text,
                },
            }).then(function (response) {
                  
                const { 
                    data
                } = response;
                
                const {
                    QUERY_STATUS
                } = data
                
                if(QUERY_STATUS) {
                    window.location.reload(1);
                }
            });

        } );


        const queryList = document.querySelector('.barra-sesiones');
        queryList.innerHTML = "";
        
        const newFeed = function( title, content ){
            
            const feedContainer = document.createElement('div');
            feedContainer.classList.add('feed1-post');

            const feedContainerH3 = document.createElement('h3');
            feedContainerH3.textContent = title;
            feedContainer.appendChild(feedContainerH3);

            const contactButton = document.createElement('button');
            contactButton.classList.add('contactar');
            contactButton.textContent= "Contactar";
            feedContainer.appendChild(contactButton);

            const linewrap = document.createElement('br');
            feedContainer.appendChild(linewrap);
            
            const postP = document.createElement('p');
            postP.classList.add('post-p');
            postP.textContent = content;
            
            feedContainer.appendChild(postP);
            queryList.appendChild( feedContainer );
            return;
        }

        

        fetch('/person_query')
        .then( listTo => listTo.json() )
        .then(
            postList => {
                const keys = Object.keys(postList);
                keys.forEach(element => {
                    const item = postList[element];
                    
                    const {
                        ID,
                        USER_NAME,
                        TITLE,
                        STATUS,
                        USER_CHAT_SESSION
                    } = item;

                    
                    newFeed(
                        USER_NAME,
                        TITLE
                    );

                
                });
            }
        );
        
        try{}catch(e){}//end catch
    }
)();

export default mainPerson;
