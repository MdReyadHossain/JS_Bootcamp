const validateEmail = (email) => {
    if (!email.includes('@')) {
        return false;
    }

    if (email.startsWith('@') || email.endsWith('@')) {
        return false;
    }

    const atIndex = email.indexOf('@');
    if (atIndex === 0 || atIndex === email.length - 1) {
        return false;
    }

    const lastDotIndex = email.lastIndexOf('.');
    if (lastDotIndex === -1 || lastDotIndex < atIndex) {
        return false;
    }

    return true;
}
