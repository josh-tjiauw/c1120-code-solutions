select "c"."name" as "Country Name",
  count("countryId") as "Total Cities"
from "cities" as "ct"
join "countries" as "c" using ("countryId")
--where "c"."name" = 'Murica' //This value would have 35--
group by "c"."countryId"
