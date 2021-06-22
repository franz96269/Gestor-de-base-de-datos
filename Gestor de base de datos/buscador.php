<?php

include('base de datos.php');

$search = $_POST['search'];
if(!empty($search)) {
  $query = "SELECT * FROM pelicula WHERE Anio LIKE '$search%' or Pelicula like '$search%' or id like '$search%' or Director like '$search%' ";
 
  $result = mysqli_query($connection, $query);
  
  if(!$result) {
    die('Query Error' . mysqli_error($connection));
  }
  
  $json = array();
  while($row = mysqli_fetch_array($result)) {
    $json[] = array(
      'id' => $row['id'],
      'Pelicula' => $row['Pelicula'],
      'Director' => $row['Director'],
      'Anio' => $row['Anio'],
      'Protagonistas' => $row['Protagonistas'],
	    'Genero' => $row['Genero'],
	 
    );
  }
  $jsonstring = json_encode($json);
  echo $jsonstring;
}

?>