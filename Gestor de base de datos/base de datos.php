<?php

$connection = mysqli_connect(
  'localhost', 'root', '', 'peliculas'
);

// for testing connection
#if($connection) {
#  echo 'database is connected';
#}

?>