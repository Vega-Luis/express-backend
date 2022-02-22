CREATE PROCEDURE dbo.CheckUser
	@InUserName VARCHAR(16)
	,@InPassword VARCHAR(16)
	,@OutResult INT OUTPUT
AS

BEGIN
	SET NOCOUNT ON;
	SET @OutResult=0;

	SELECT U.UserName
	, U.[Password]
	FROM dbo.[User] U
	WHERE U.UserName = @inUserName
	AND U.[Password] = @InPassword

	SET NOCOUNT OFF;
END;

GO

CREATE PROCEDURE dbo.InsertUser
	@inUserName VARCHAR(16)
	, @inPassword VARCHAR(16)
	, @outResult INT OUTPUT
AS

BEGIN
	SET NOCOUNT ON;
	SET @outResult = 0;

	INSERT INTO dbo.[User] (
		UserName
		,[Password]
	)
	VALUES (@inUserName, 
	@inPassword)

	SET NOCOUNT OFF;
END;