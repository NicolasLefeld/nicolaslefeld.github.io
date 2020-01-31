import uuid from 'uuid/v4';

export const mapDreamJobFromJsonResume = jsonResume => ({
    places: (jsonResume.specific?.dreamJob?.locations ?? []).map(location => ({ ...location, id: location.id || uuid() })),
    perks: jsonResume.specific?.dreamJob?.perks,
    salary: jsonResume.specific?.dreamJob?.salary,
    remoteFrequency: jsonResume.specific?.dreamJob?.remoteFrequency,
    contractTypes: jsonResume.specific?.work?.contractTypes
});

export const mapDreamJobToJsonResume = data => ({
    specific: {
        dreamJob: {
            locations: data.places,
            perks: data.perks,
            salary: data.salary,
            remoteFrequency: data.remoteFrequency
        },
        work: {
            contractTypes: data.contractTypes
        }
    }
});
