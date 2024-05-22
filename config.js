module.exports = {
    client: {
        token: 'MTE4ODk5ODc1NTYwMTYxMjg2MQ.G3xZMj.ug_ZS0zxxf5RbDGN2E5VJEZG-whsxu3NNFsh64', // ← Your bot token (.env IS RECOMMENDED)
        id: '1188998755601612861' // ← Your bot ID
    },
    modmail: {
        guildId: '1188930994363961417', // ← Your server ID
        categoryId: '1188935249342775337', // ← The modmail category ID
        staffRoles: ['1189008582381936680'], // ← The modmail staff roles IDs
        mentionStaffRolesOnNewMail: true // ← Mention staff roles when there is a new mail?
    },
    logs: {
        webhookURL: '' // ← The logging webhook URL (OPTIONAL) (.env IS RECOMMENDED)
    }
};