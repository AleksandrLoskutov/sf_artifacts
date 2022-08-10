# syntax=docker/dockerfile:1

FROM ubuntu:20.04 as builder

RUN apt-get update && \
    apt-get install -y wget

FROM alpine:3.6

COPY --from=builder /usr/bin/wget /bin/

COPY --from=builder /lib/x86_64-linux-gnu/libpcre2-8.so.0 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libuuid.so.1 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libidn2.so.0 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libssl.so.1.1 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libcrypto.so.1.1 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libz.so.1 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libpsl.so.5 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libpthread.so.0 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libunistring.so.2 /lib/
COPY --from=builder /lib/x86_64-linux-gnu/libdl.so.2 /lib/

COPY favicon.sh .

CMD ["chmod", "777", "favicon.sh"]

CMD ["sh", "favicon.sh"]
