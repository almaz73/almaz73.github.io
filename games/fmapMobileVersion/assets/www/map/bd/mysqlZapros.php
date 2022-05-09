<?


    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbName = "almaz11755_agafo";

    // $hostname = "localhost";
    // $username = "almaz11755";
    // $password = "7ed05cd3";
    // $dbName = "almaz11755_agafo";

    mysql_connect($hostname, $username, $password) or die ("Не могу создать соединение");
    mysql_select_db($dbName) or die (mysql_error());


    $rs = mysql_query("SELECT * FROM  `buslines` WHERE  `city` =  '".$_GET['city']."' ORDER BY  `buslines`.`vidAndNomer` ASC ");

if (!$rs) {
    die('Неверный запрос: ' . mysql_error());
}

// добавляю в страницу маршруты города
echo "<script> var E=E||{};E.marshrut = [];E.BAZA ={";
    while($row = mysql_fetch_array($rs)) {
        echo "\"".$row['vidAndNomer'] . "\":".$row['coordinates'].",\n" ;
    }
echo "}</script>";

    mysql_close();

?>