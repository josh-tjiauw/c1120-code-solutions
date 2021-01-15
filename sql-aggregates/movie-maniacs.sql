select "c"."firstName" as "first name",
"c"."lastName" as "last name",
sum("p"."amount") as "total paid"
from "customers" as "c"
join "rentals" using ("customerId")
join "payments" as "p" using ("rentalId")
group by "c"."firstName", "c"."lastName"
order by sum("p"."amount") desc
