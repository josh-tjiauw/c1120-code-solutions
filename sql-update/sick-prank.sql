update "films"
set "rating" = 'G'
where "rating" = 'NC-17'
returning "title", "rating";
