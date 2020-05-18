import random

firstname = "Abhishek"
lastname = "Shree"
id = random.randint(10000000, 99999999)

regID = firstname[:4].lower() + lastname[0].lower() + str(id)

print(regID)