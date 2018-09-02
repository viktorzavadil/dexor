<?php

if (isset($_POST['email'])) {
    $email_to = "vikous@dexor.cz";
    $email_subject = "Objednávka pro DEXOR";

    function died($error)
    {
        $errorMessage = $errorMessage . "Prosím, jděte zpět a opravte chyby.";
        die();
    }


    // validation expected data exists

    if (!isset($_POST['email']) ||
        !isset($_POST['order']))
    ) {

        died('Nebyly vyplněny povinné atributy.');

    }

    $email_from = $_POST['email'];
    $message = $_POST['order'];


    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email_from)) {
        $error_message .= 'Emailová adresa není validní.';
    }

    if (strlen($order) < 2) {
        $error_message .= 'Požadavek není validní.';
    }

    if (strlen($error_message) > 0) {

        died($error_message);

    }

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }


    $email_message = "Objednávka:\n\n" . clean_string($order);

// create email headers

    $headers = 'From: ' . $email_from . "\n" . 'Reply-To: ' . $email_from . "\n" . 'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    die();
}
?>
