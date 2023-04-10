<!DOCTYPE html> 
<html> 
    <body> 
        <?php
            if (isset($_POST['size'])){
                echo "<table border=\"1\">";
                echo "<th></th>";
                $size = $_POST['size'];
                for ($i = 1; $i <= $size; $i++) {
                    echo "<th>$i</th>";
                    }
                echo "</tr>";
                
                for ( $i = 1; $i<= $size; $i++ )
                {
                    echo "<tr>";
                    echo "<th>$i</th>";
                    for ( $j = 1; $j <= $size; $j++ )
                    {
                        echo "<td>" .($i * $j). "</td>";
                    }
                    echo "</tr>";
                }
                echo "</table>";
            }

            ?>
    </body> 
</html>