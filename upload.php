<?php
$targetDir = "uploads/";

if (!is_dir($targetDir)) {
    mkdir($targetDir, 0777, true);
}

$fileName = basename($_FILES["file"]["name"]);
$targetFile = $targetDir . uniqid() . "_" . $fileName;

if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
    $link = "https://" . $_SERVER['HTTP_HOST'] . "/" . $targetFile;

    echo "<h2>Upload Success!</h2>";
    echo "<p>Your file link:</p>";
    echo "<a href='$link'>$link</a>";
} else {
    echo "Upload failed!";
}
?>

