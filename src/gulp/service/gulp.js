(function (exports) {
    'use strict';

    exports.angular.module('gulp.gulp', [
        'gulp.Project',
        'gulp.Task',
        'gulp.Step',
    ]).factory('gulp', gulpFactory);

    function gulpFactory(Project, Task, Step) {
        var projects = [];

        // dummy data
        projects = [
            new Project({
                name: 'one',
                tasks: [
                    new Task({
                        name: 'default',
                        steps: [
                            new Step({
                                name: 'concat',
                                options: 'tada'
                            }),
                            new Step({
                                name: 'other',
                                options: { 'a': 'b' }
                            })
                        ]
                    }),
                    new Task({
                        name: 'src'
                    }),
                    new Task({
                        name: 'less'
                    })
                ]
            }),
            new Project({
                name: 'two',
                tasks: [
                    new Task({
                        name: 'default'
                    })
                ]
            })
        ];

        return {
            listProjects: function () {
                return projects;
            },
            getProject: function (projectName) {
                var result;
                projects.forEach(function (project) {
                    if (project.name === projectName) {
                        result = project;
                    }
                });
                return result;
            },
            createProject: function () {
                projects.push(new Project({
                    name: 'Unknown',
                    tasks: [
                        new Task({
                            name: 'default'
                        })
                    ]
                }));
            }
        };
    }

}(this));