<?php

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'mydb');

// Simple class example
class User {
    private $name;
    private $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getName() {
        return htmlspecialchars($this->name);
    }
    
    public function getEmail() {
        return htmlspecialchars($this->email);
    }
}

// Create user instance
$user = new User("John Doe", "john@example.com");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Example</title>
</head>
<body>
    <h1>Welcome, <?php echo $user->getName(); ?></h1>
    <p>Email: <?php echo $user->getEmail(); ?></p>
    
    <?php
    // Loop example
    $items = ['Apple', 'Banana', 'Orange'];
    echo '<ul>';
    foreach ($items as $item) {
        echo '<li>' . htmlspecialchars($item) . '</li>';
    }
    echo '</ul>';
    ?>
</body>
</html>
