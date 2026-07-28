DELETE FROM group_permissions
WHERE group_id = 1
  AND permission_id IN (
      SELECT permission_id
      FROM permissions
      WHERE permission_codename = 'view_user'
  );