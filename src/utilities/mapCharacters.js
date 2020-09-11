const mapCharacter = (aRawCharacter) =>  {
    return {
        id: aRawCharacter.id,
        name: aRawCharacter.name,
        image: aRawCharacter.image,
        location: aRawCharacter.location.name,
        species: aRawCharacter.species,
        origin: aRawCharacter.origin.name
            
    }
}

export default mapCharacter;