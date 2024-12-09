function duplicate(transform) {
    // Create a deep copy of the transform object
    return JSON.parse(JSON.stringify(transform));
}
