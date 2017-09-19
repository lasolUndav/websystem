angular.module('Projects').factory('projectService', ['dataService',
    function (dataService) {
        return {
            save: function (convocatory, project, onProjectUpdated) {
                if (convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects';
                dataService.saveObject(referenceName, project, onProjectUpdated);
            },
            getProject: function (convocatory,id, callback) {
                dataService.getData('convocatories/'+convocatory+'/projects/' + id, callback);
            },
            getProjects: function(convocatory, callback){
                dataService.getData('convocatories/'+convocatory+'/projects', callback);
            },
            addProduct: function (convocatory, project, product, onProductUpdated) {
                if (project == null && convocatory == null)
                    return;
                var referenceName = 'convocatories/' + convocatory + '/projects/' + project + '/products';
                dataService.saveObject(referenceName, product, onProductUpdated);
            }
        };
    }
]);

