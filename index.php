<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Book Detail</title>
    <style>
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Book Detail</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Mark</th>
        </tr>

        <?php
        $host = '127.0.0.1';
        $dbname = 'book';
        $username = 'root';
        $password = 'zhrich';
$port=3316;
        $conn = new mysqli('127.0.0.1:3316', 'root', 'zhrich', 'book');

        if ($conn->connect_error) {
            die("Error: " . $conn->connect_error);
        }

        if (isset($_GET['book_id'])) {
            $book_id = intval($_GET['book_id']);
            $sql = "SELECT ID, name, author, price, mark FROM book WHERE ID = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $book_id);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>
                            <td>" . $row["ID"] . "</td>
                            <td>" . htmlspecialchars($row["name"]) . "</td>
                            <td>" . htmlspecialchars($row["author"]) . "</td>
                            <td>" . $row["price"] . "</td>
                            <td>" . $row["mark"] . "</td>
                          </tr>";
                }
            } else {
                echo "<tr><td colspan='5'>No details found for Book ID: $book_id</td></tr>";
            }
        } else {
            echo "<tr><td colspan='5'>No book ID provided.</td></tr>";
        }

        $conn->close();
        ?>
    </table>
</body>
</html>
