-- correcion: asociar permisos de usuarios a users.user
INSERT INTO permissions (permission_name, permission_codename)
VALUES
('Visualizar grupos', 'view_groups'),
('Editar grupos', 'edit_groups'),
('Reportar grupos', 'report_groups'),
('Habilitar/Deshabilitar grupos', 'disable_group');

UPDATE permissions
SET content_type_id = 2
WHERE permission_codename IN (
    'list_group',
    'create_group',
    'report_group',
    'disable_group'
);