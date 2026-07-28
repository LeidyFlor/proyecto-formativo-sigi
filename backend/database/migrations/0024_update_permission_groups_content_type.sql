UPDATE permissions
SET content_type_id = 2
WHERE permission_codename IN (
    'view_groups',
    'edit_groups',
    'report_groups',
    'disable_group'
);