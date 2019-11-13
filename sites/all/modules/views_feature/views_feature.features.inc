<?php
/**
 * @file
 * views_feature.features.inc
 */

/**
 * Implements hook_views_api().
 */
function views_feature_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_image_default_styles().
 */
function views_feature_image_default_styles() {
  $styles = array();

  // Exported image style: header_images.
  $styles['header_images'] = array(
    'label' => 'Header Images',
    'effects' => array(
      2 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 1600,
          'height' => 785,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'header_images',
        ),
        'weight' => 0,
      ),
    ),
  );

  // Exported image style: team_photos.
  $styles['team_photos'] = array(
    'label' => 'Team photos',
    'effects' => array(
      1 => array(
        'name' => 'manualcrop_crop_and_scale',
        'data' => array(
          'width' => 300,
          'height' => 300,
          'upscale' => 0,
          'respectminimum' => 1,
          'onlyscaleifcrop' => 0,
          'style_name' => 'team_photos',
        ),
        'weight' => 0,
      ),
    ),
  );

  return $styles;
}
