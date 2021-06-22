$(document).ready(function() {
    // Global Settings


    // Testing Jquery
    console.log('jquery is working!');
    $('#task-result').hide();



    $('#search').keyup(function() {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: 'buscador.php',
                data: { search },
                type: 'POST',
                success: function(response) {
                    if (!response.error) {
                        let tasks = JSON.parse(response);
                        let template = '';
                        tasks.forEach(pelicula => {
                            template += `
                           
                            
                    <tr>
                   <td scope="row" id=ID> ${pelicula.id}</td>
                   
                                        
                   
                   
                   <td scope="col" id=Pelicula>${pelicula.Pelicula}</td>  
                   

                   
                   <td scope="col" id=Director>${pelicula.Director}</td>  
                   

                   
                   
                   <td scope="col" id=Año>${pelicula.Anio}</td>  
                   </tr>
                
				  `
                        });

                        $('#container').html(template);
                        $('#task-result').show();
                    }
                }
            })
        }
    });
});