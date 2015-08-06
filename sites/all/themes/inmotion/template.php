<?php 
function inmotion_form_alter(&$form, &$form_state, $form_id) {    
 if ($form_id == 'webform_client_form_24') {
        $form['submitted']['email']['newsletter_email_address']['#attributes']['placeholder']= t('Email*');
         $form['submitted']['first_name']['#attributes']['placeholder']= t('First Name*');
          $form['submitted']['last_name']['#attributes']['placeholder']= t('Last Name*');
}
}



?>