DECLARE @RC INT 
DECLARE @inUserName VARCHAR(16) = 'lol'
DECLARE @inPassword VARCHAR(16) = 'j123'
DECLARE @outResult INT

EXECUTE @RC = dbo.CheckUser
    @inUserName
    , @inPassword
    , @outResult OUTPUT
    SELECT @outResult


GO

DECLARE @RC INT
DECLARE @inUserName VARCHAR(16) = 'Pancho'
DECLARE @inPassword VARCHAR(16) = 'P123'
DECLARE @outResult INT

EXECUTE @RC = dbo.InsertUser
    @inUserName
    , @inPassword
    , @outResult OUTPUT
    SELECT @outResult