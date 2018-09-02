<?php

function bad_request($error) {
    $arr = array("message" => $error);
    header("HTTP/1.1 400 Bad Request");
    echo json_encode($arr);
    die();
}

function clean_string($string) {
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

$json = json_decode(file_get_contents("php://input"), true);
$email = $json["user"]["email"];

$order = $json["user"]["name"] . " " . $json["user"]["surname"] . "\n";
$order .= $json["user"]["street"] . "\n";
$order .= $json["user"]["postalCode"] . " " . $json["user"]["city"] . "\n\n";

foreach($json["cart"] as $item) {
    $order .= $item["title"];
    if (isset($item["size"])) {
        $order .= " (" . $item["size"] . ")";
    }
    $order .= " " . $item["quantity"] . "x\n";
}

if (isset($json["user"]["note"])) {
    $order .= "\n" . $json["user"]["note"] . "\n";
}

if(!isset($email)) {
    bad_request("Parameter email is required");
}

if (!isset($order)) {
    bad_request("Parameter order is required");
}

$email_to = "vitis@dexor.cz";
$email_subject = "DEXOR: Objednávka";

$email_exp = "/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/";

if (!preg_match($email_exp, $email)) {
    bad_request("Email is not valid");
}

if (strlen($order) < 2) {
    bad_request("Order is not valid");
}


$email_message = "Objednávka:\n\n" . clean_string($order);

$headers = "From: " . $email . "\n";
$headers .= "Reply-To: " . $email . "\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/plain; charset=utf-8\n";
$headers .= "Content-Transfer-Encoding: 8bit\n";

$result = mail($email_to, $email_subject, $email_message, $headers);
if ($result) {
    $arr = array("message" => "Order has been sent");
    header("HTTP/1.1 202 Accepted");
    echo json_encode($arr);
} else {
    $arr = array("message" => "Email is not accepted for delivery");
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode($arr);
}

die();

?>
