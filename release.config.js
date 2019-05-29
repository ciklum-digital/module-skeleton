
module.exports = {
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: 'v${version}',
  branch: 'travis',
  prepare: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
        changelogTitle: 'df2-skeleton-module changelog documentation ✏️',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [
          'package.json',
          'package-lock.json',
          'docs/CHANGELOG.md',
        ],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/gitlab',
      {
        gitlabUrl: 'https://gitlab.ciklum.net',
      },
    ],
  ],
}
