<?php 

function dirlist($path){
  $base = 'img/';
  if($handle = opendir($base . $path)){
    $files = array();
    while (false !== ($entry = readdir($handle))){
      if(strlen($entry) <= 2) continue;
      $files[] = "'$base$path/$entry'";
    }

    $files = array_reverse($files);

    print '<script type="text/javascript">';
    print "var $path = [";
    foreach($files as $i => $filename){
      $sep = $i ? ',' : '';
      print "$sep $filename";
    }
    
    print '];';
    print '</script>';
  }
}
?>
