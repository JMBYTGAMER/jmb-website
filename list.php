<?php
$dir = "uploads/";
$files = scandir($dir);

echo "<h2>All Uploaded Files</h2>";

foreach ($files as $file) {
    if ($file != "." && $file != "..") {
        echo "<a href='uploads/$file'>$file</a><br>";
    }
}
?>

