<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
if (!empty($_POST['name']) && !empty($_POST['phone'])){
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
  $name = strip_tags($_POST['name']);
  $nameFieldset = "Имя пославшего: ";
  }
}
$urlFieldset = "url: xen-travel.ru/promo-new/maldives2";
 
if (isset($_POST['phone'])) {
  if (!empty($_POST['phone'])){
  $phone = strip_tags($_POST['phone']);
  $phoneFieldset = "Телефон: ";
  }
}

// if (isset($_POST['content'])) {
//   if (!empty($_POST['content'])){
//   $theme = strip_tags($_POST['content']);
//   $themeFieldset = "Тема: ";
//   }
// }
// $token = "1357059974:AAH4uSx3RdNeoSlaItGVLVMZJuhFwsFshko";
// $chat_id = "-341473700";
$token = "1301934899:AAHfWq996KIMapCdw5CC7ep3PlR5BHFy9RM";
$chat_id = "-464529322";
$arr = array(
  $urlFieldset => $data['url'],
  $nameFieldset => $name,
  $phoneFieldset => $phone,
  // $themeFieldset => $theme
);
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  
  echo '<p class="success">Спасибо за отправку вашего сообщения!</p>';
    return true;
} else {
  echo '<p class="fail"><b>Ошибка. Сообщение не отправлено!</b></p>';
}
} else {
  echo '<p class="fail">Ошибка. Вы заполнили не все обязательные поля!</p>';
}
} else {
header ("Location: /");
}
?>