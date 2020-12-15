<?php

class Blocksy_Screen_Manager {
	private $prefixes = [];

	public function get_prefix($args = []) {
		$args = wp_parse_args($args, [
			'allowed_prefixes' => null,
			'default_prefix' => null
		]);

		$args_key = md5(json_encode($args));

		if (! isset($this->prefixes[$args_key])) {
			$this->prefixes[$args_key] = $this->compute_prefix($args);
		}

		return $this->prefixes[$args_key];
	}

	private function compute_prefix($args = []) {
		$args = wp_parse_args($args, [
			'allowed_prefixes' => null,
			'default_prefix' => null
		]);

		if (function_exists('is_lifterlms') && is_lifterlms()) {
			return 'lms';
		}

		$actual_prefix = null;

		if (function_exists('is_bbpress') && (
			get_post_type() === 'forum'
			||
			get_post_type() === 'topic'
			||
			get_post_type() === 'reply'
		)) {
			$actual_prefix = 'bbpress_single';
		}

		if (function_exists('is_buddypress') && (
			is_buddypress()
		)) {
			$actual_prefix = 'buddypress_single';
		}

		if (blocksy_is_page([
			'shop_is_page' => false,
			'blog_is_page' => false
		]) || is_single()) {
			if (is_single()) {
				$post_type = blocksy_manager()->post_types->is_supported_post_type();

				if ($post_type) {
					$actual_prefix = $post_type . '_single';
				}
			}

			if (! $actual_prefix) {
				$actual_prefix = blocksy_is_page() ? 'single_page' : 'single_blog_post';
			}
		}

		if (function_exists('is_product_category')) {
			$tax_obj = get_queried_object();

			if (
				is_product_category()
				||
				is_product_tag()
				||
				is_shop()
				||
				(
					is_tax()
					&&
					function_exists( 'taxonomy_is_product_attribute')
					&&
					taxonomy_is_product_attribute($tax_obj->taxonomy)
				)
			) {
				$actual_prefix = 'woo_categories';
			}

			if (is_product()) {
				$actual_prefix = 'product';
			}
		}

		if (
			(
				is_category()
				||
				is_tag()
				||
				is_tax()
				||
				is_archive()
				||
				is_post_type_archive()
			) && ! is_author() && ! $actual_prefix
		) {
			$post_type = blocksy_manager()->post_types->is_supported_post_type();

			if ($post_type) {
				$actual_prefix = $post_type . '_archive';
			} else {
				$actual_prefix = 'categories';
			}
		}

		if (is_search()) {
			$actual_prefix = 'search';
		}

		if (is_author()) {
			$actual_prefix = 'author';
		}

		if (is_home()) {
			$actual_prefix = 'blog';
		}

		if (
			! $actual_prefix
			|| (
				$args['allowed_prefixes'] && ! in_array(
					$actual_prefix,
					$args['allowed_prefixes']
				) && strpos($actual_prefix, '_archive') === false
			)
		) {
			$actual_prefix = $args['default_prefix'];
		}

		return $actual_prefix;
	}
}

