FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY backend.sln ./
COPY backend/backend.csproj ./backend/

RUN dotnet restore backend/backend.csproj

COPY backend/ ./backend/

RUN dotnet build backend/backend.csproj -c Release -o /app
RUN dotnet publish backend/backend.csproj -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

WORKDIR /app


COPY --from=build /app ./

EXPOSE 5246

ENTRYPOINT ["dotnet", "backend.dll"]
