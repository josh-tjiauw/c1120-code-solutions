select "c"."name" as "category name",
count("castMembers"."filmId")
from "categories" as "c"
join "filmCategory" using ("categoryId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."actorId" = 178
group by "categoryId"
